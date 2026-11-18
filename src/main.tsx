import './polyfills';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error?.message || 'Lỗi hiển thị giao diện',
    };
  }

  componentDidCatch(error: Error) {
    console.error('AppErrorBoundary caught error:', error);
  }

  handleReload = () => {
    try {
      window.location.reload();
    } catch {
      // ignore
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            backgroundColor: '#040817',
            color: '#f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              maxWidth: '420px',
              width: '100%',
              backgroundColor: '#071126',
              border: '1px solid #0284c7',
              borderRadius: '16px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#38bdf8' }}>
              Ứng dụng Toán 10 cần làm mới
            </h2>
            <p style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '16px', lineHeight: 1.5 }}>
              Thiết bị vừa gặp sự cố tạm thời khi tải dữ liệu ({this.state.errorMessage}). Nhấn nút bên dưới để khôi phục ngay.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              style={{
                backgroundColor: '#06b6d4',
                color: '#040817',
                fontWeight: 700,
                fontSize: '14px',
                padding: '12px 20px',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Tải lại ứng dụng
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Đăng ký Service Worker an toàn cho mọi iPhone (iPhone 8 / X / XS Max -> iPhone 18 & Android)
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  try {
    registerSW({
      immediate: true,
      onRegisteredSW(_swUrl, registration) {
        if (registration) {
          setInterval(() => {
            registration.update().catch(() => {});
          }, 60 * 60 * 1000);
        }
      },
      onRegisterError() {
        // Không chặn ứng dụng nếu trình duyệt/Private Mode không hỗ trợ SW
      },
    });
  } catch {
    // ignore SW registration failure on restricted WebViews / Private Mode
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  );
}
