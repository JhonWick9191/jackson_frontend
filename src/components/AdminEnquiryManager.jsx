import { useState, useEffect, useCallback } from 'react';
import {
  Search,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { enquiryApi } from '../services/api';
import './AdminEnquiryManager.css';

const TABS = [
  { key: 'all', label: 'All Enquiries' },
  { key: 'interested', label: 'Interested' },
  { key: 'not-interested', label: 'Not Interested' },
  { key: 'can-be-converted', label: 'Can Be Converted' },
  { key: 'deleted', label: 'Deleted Queries' }
];

function formatDateDisplay(value) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function getStatusBadgeClass(status, isDeleted) {
  if (isDeleted) return 'status-pill status-pill--deleted';
  switch (status) {
    case 'Interested':
      return 'status-pill status-pill--interested';
    case 'Not Interested':
      return 'status-pill status-pill--not-interested';
    case 'Can Be Converted':
      return 'status-pill status-pill--convertible';
    default:
      return 'status-pill status-pill--new';
  }
}

function MonthlyEnquiryChart({ data, year }) {
  const chartWidth = 680;
  const chartHeight = 220;
  const paddingLeft = 36;
  const paddingBottom = 28;
  const paddingTop = 20;
  const plotHeight = chartHeight - paddingTop - paddingBottom;
  const maxVal = Math.max(4, ...data.map((d) => d.count));
  const slotWidth = (chartWidth - paddingLeft - 12) / 12;
  const barWidth = Math.max(18, slotWidth - 16);

  return (
    <div className="monthly-chart-wrap">
      <div className="monthly-chart-header">
        <div>
          <h3>Monthly Enquiries ({year})</h3>
          <p>Live monthly enquiry volume aggregated from MongoDB records.</p>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="monthly-chart-svg"
        role="img"
        aria-label={`Monthly enquiries chart for ${year}`}
      >
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
          const y = paddingTop + plotHeight * (1 - ratio);
          const tickVal = Math.round(maxVal * ratio);
          return (
            <g key={ratio}>
              <line
                x1={paddingLeft}
                y1={y}
                x2={chartWidth - 8}
                y2={y}
                className="chart-grid-line"
              />
              <text x={paddingLeft - 6} y={y + 4} textAnchor="end" className="chart-axis-text">
                {tickVal}
              </text>
            </g>
          );
        })}

        {data.map((item, idx) => {
          const barHeight = maxVal > 0 ? (item.count / maxVal) * plotHeight : 0;
          const x = paddingLeft + idx * slotWidth + (slotWidth - barWidth) / 2;
          const y = paddingTop + plotHeight - barHeight;

          return (
            <g key={item.month}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={Math.max(barHeight, 2)}
                rx="4"
                className={item.count > 0 ? 'chart-bar chart-bar--active' : 'chart-bar'}
              />
              {item.count > 0 && (
                <text
                  x={x + barWidth / 2}
                  y={Math.max(12, y - 5)}
                  textAnchor="middle"
                  className="chart-value-label"
                >
                  {item.count}
                </text>
              )}
              <text
                x={x + barWidth / 2}
                y={chartHeight - 8}
                textAnchor="middle"
                className="chart-axis-text"
              >
                {item.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function AdminEnquiryManager() {
  const currentYear = new Date().getFullYear();

  const [activeTab, setActiveTab] = useState('all');
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [filters, setFilters] = useState({
    month: '',
    startDate: '',
    endDate: '',
    search: ''
  });
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);

  const [stats, setStats] = useState({
    summary: {
      totalEnquiries: 0,
      currentMonthEnquiries: 0,
      interested: 0,
      notInterested: 0,
      canBeConverted: 0,
      deletedEnquiries: 0
    },
    monthlyChart: [],
    byBannerSource: []
  });

  const [enquiries, setEnquiries] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, totalCount: 0, totalPages: 1 });
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState('');
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');

  const loadData = useCallback(async () => {
    setLoading(true);
    setError('');

    const queryParams = {
      tab: activeTab,
      page,
      limit: 10
    };

    if (filters.month) {
      queryParams.month = filters.month;
    } else {
      if (filters.startDate) queryParams.startDate = filters.startDate;
      if (filters.endDate) queryParams.endDate = filters.endDate;
    }

    if (filters.search) {
      queryParams.search = filters.search;
    }

    const statsParams = {
      year: selectedYear
    };
    if (filters.month) {
      statsParams.month = filters.month;
    } else {
      if (filters.startDate) statsParams.startDate = filters.startDate;
      if (filters.endDate) statsParams.endDate = filters.endDate;
    }

    try {
      const [statsRes, listRes] = await Promise.all([
        enquiryApi.getStats(statsParams),
        enquiryApi.getList(queryParams)
      ]);
      setStats(statsRes);
      setEnquiries(Array.isArray(listRes.enquiries) ? listRes.enquiries : []);
      setPagination(
        listRes.pagination || { page: 1, limit: 10, totalCount: 0, totalPages: 1 }
      );
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load enquiry records.');
    } finally {
      setLoading(false);
    }
  }, [activeTab, filters, page, selectedYear]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setPage(1);
    setFeedback('');
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setPage(1);
    setFilters((prev) => {
      const next = { ...prev, [name]: value };
      if (name === 'month' && value) {
        next.startDate = '';
        next.endDate = '';
      }
      if ((name === 'startDate' || name === 'endDate') && value) {
        next.month = '';
      }
      return next;
    });
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    setFilters((prev) => ({ ...prev, search: searchInput.trim() }));
  };

  const handleResetFilters = () => {
    setSearchInput('');
    setFilters({ month: '', startDate: '', endDate: '', search: '' });
    setPage(1);
  };

  const handleRowAction = async (enquiry, actionValue) => {
    if (!actionValue) return;
    setBusyId(enquiry._id);
    setError('');
    setFeedback('');

    try {
      if (actionValue === 'DELETE_QUERY') {
        await enquiryApi.softDelete(enquiry._id);
        setFeedback(
          `Moved enquiry from ${enquiry.firstName} ${enquiry.lastName} to Deleted Queries.`
        );
      } else {
        await enquiryApi.updateStatus(enquiry._id, actionValue);
        setFeedback(
          `Updated ${enquiry.firstName} ${enquiry.lastName} status to "${actionValue}".`
        );
      }
      await loadData();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not update enquiry status.');
    } finally {
      setBusyId('');
    }
  };

  const handleRestore = async (enquiry) => {
    setBusyId(enquiry._id);
    setError('');
    setFeedback('');
    try {
      await enquiryApi.restore(enquiry._id);
      setFeedback(`Restored enquiry from ${enquiry.firstName} ${enquiry.lastName}.`);
      await loadData();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not restore enquiry.');
    } finally {
      setBusyId('');
    }
  };

  const summary = stats.summary || {};

  return (
    <div className="admin-enquiry-manager">
      <div className="admin-section-toolbar">
        <div>
          <h2>Banner Enquiry Tracking &amp; Analytics</h2>
          <p>
            Every homepage banner enquiry is tracked by source poster and persisted in MongoDB.
          </p>
        </div>

        <div className="year-picker-wrap">
          <label htmlFor="chart-year-select">
            <Calendar size={16} aria-hidden="true" />
            Chart Year
          </label>
          <select
            id="chart-year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {[currentYear - 1, currentYear, currentYear + 1].map((yr) => (
              <option key={yr} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="stats-cards-grid">
        <div className="stat-card">
          <span className="stat-label">Total Active Enquiries</span>
          <strong className="stat-value">{summary.totalEnquiries ?? 0}</strong>
        </div>
        <div className="stat-card">
          <span className="stat-label">Current Month</span>
          <strong className="stat-value">{summary.currentMonthEnquiries ?? 0}</strong>
        </div>
        <div className="stat-card stat-card--interested">
          <span className="stat-label">Interested</span>
          <strong className="stat-value">{summary.interested ?? 0}</strong>
        </div>
        <div className="stat-card stat-card--convertible">
          <span className="stat-label">Can Be Converted</span>
          <strong className="stat-value">{summary.canBeConverted ?? 0}</strong>
        </div>
        <div className="stat-card stat-card--not-interested">
          <span className="stat-label">Not Interested</span>
          <strong className="stat-value">{summary.notInterested ?? 0}</strong>
        </div>
        <div className="stat-card stat-card--deleted">
          <span className="stat-label">Deleted / Archived</span>
          <strong className="stat-value">{summary.deletedEnquiries ?? 0}</strong>
        </div>
      </div>

      {/* Analytics Row: Monthly Chart + Banner Source Breakdown */}
      <div className="analytics-grid">
        <MonthlyEnquiryChart data={stats.monthlyChart || []} year={selectedYear} />

        <div className="source-breakdown-card">
          <h3>Enquiries by Banner Source</h3>
          <p>Lead distribution across hero posters.</p>
          {stats.byBannerSource && stats.byBannerSource.length > 0 ? (
            <ul className="source-breakdown-list">
              {stats.byBannerSource.map((item) => (
                <li key={item.bannerTitle}>
                  <span className="source-name">{item.bannerTitle}</span>
                  <strong className="source-count">{item.count}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p className="source-empty-note">No banner enquiries recorded for this filter yet.</p>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="enquiry-filters-card">
        <form className="enquiry-search-form" onSubmit={handleSearchSubmit}>
          <div className="search-input-wrap">
            <Search size={16} aria-hidden="true" />
            <input
              type="text"
              placeholder="Search name, email, phone, or banner title..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Search
          </button>
        </form>

        <div className="date-filters-group">
          <div className="filter-control">
            <label htmlFor="filter-month">Month</label>
            <input
              id="filter-month"
              name="month"
              type="month"
              value={filters.month}
              onChange={handleFilterChange}
            />
          </div>

          <div className="filter-control">
            <label htmlFor="filter-start-date">From Date</label>
            <input
              id="filter-start-date"
              name="startDate"
              type="date"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
          </div>

          <div className="filter-control">
            <label htmlFor="filter-end-date">To Date</label>
            <input
              id="filter-end-date"
              name="endDate"
              type="date"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
          </div>

          <button type="button" className="btn btn-outline btn-sm" onClick={handleResetFilters}>
            Reset
          </button>
        </div>
      </div>

      {feedback && (
        <div className="admin-banner-alert admin-banner-alert--success" role="status">
          <CheckCircle2 size={18} />
          <span>{feedback}</span>
        </div>
      )}

      {error && (
        <div className="admin-banner-alert admin-banner-alert--error" role="alert">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}

      {/* Status Tabs */}
      <div className="enquiry-tabs-bar" role="tablist" aria-label="Enquiry status categories">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`enquiry-tab-btn ${activeTab === tab.key ? 'enquiry-tab-btn--active' : ''}`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Enquiries Table */}
      {loading ? (
        <div className="admin-loading-box">
          <Loader2 size={24} className="spin-icon" />
          <span>Loading enquiries...</span>
        </div>
      ) : enquiries.length === 0 ? (
        <div className="admin-empty-box">
          <p>No enquiries found in this category.</p>
        </div>
      ) : (
        <>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Banner Title / Source</th>
                  <th>Enquiry Date</th>
                  <th>Current Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <strong>
                        {item.firstName} {item.lastName}
                      </strong>
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <span className="banner-source-tag">{item.bannerTitle}</span>
                    </td>
                    <td>{formatDateDisplay(item.enquiryDate || item.createdAt)}</td>
                    <td>
                      <span className={getStatusBadgeClass(item.status, item.isDeleted)}>
                        {item.isDeleted ? 'Deleted' : item.status}
                      </span>
                    </td>
                    <td>
                      {activeTab === 'deleted' ? (
                        <button
                          type="button"
                          className="btn btn-outline btn-sm"
                          disabled={busyId === item._id}
                          onClick={() => handleRestore(item)}
                        >
                          <RotateCcw size={14} />
                          Restore
                        </button>
                      ) : (
                        <select
                          aria-label={`Update status for ${item.firstName} ${item.lastName}`}
                          className="enquiry-action-select"
                          value=""
                          disabled={busyId === item._id}
                          onChange={(e) => handleRowAction(item, e.target.value)}
                        >
                          <option value="" disabled>
                            Change Status...
                          </option>
                          <option value="Interested">Interested</option>
                          <option value="Not Interested">Not Interested</option>
                          <option value="Can Be Converted">Can Be Converted</option>
                          <option value="DELETE_QUERY">Delete Query</option>
                        </select>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="admin-pagination-bar">
            <span className="pagination-summary">
              Showing page {pagination.page} of {pagination.totalPages} ({pagination.totalCount}{' '}
              total records)
            </span>
            <div className="pagination-controls">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                disabled={pagination.page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                disabled={pagination.page >= pagination.totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
