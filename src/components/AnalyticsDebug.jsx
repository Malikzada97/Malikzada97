import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BarChart3, Activity, RefreshCw } from 'lucide-react';
import AnalyticsDashboard from './AnalyticsDashboard';

const AnalyticsDebug = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [analyticsStatus, setAnalyticsStatus] = useState(null);

  const checkAnalyticsStatus = () => {
    if (window.analyticsService) {
      const data = window.analyticsService.getAnalyticsData();
      setAnalyticsStatus(data);
    }
  };

  const trackTestEvent = () => {
    if (window.analyticsService) {
      window.analyticsService.trackEvent('debug_test_event', {
        timestamp: new Date().toISOString(),
        debug: true
      });
      checkAnalyticsStatus();
    }
  };

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={checkAnalyticsStatus}
          className="h-8 px-2"
        >
          <RefreshCw className="h-3 w-3 mr-1" />
          Check
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={trackTestEvent}
          className="h-8 px-2"
        >
          <Activity className="h-3 w-3 mr-1" />
          Test
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsDashboardOpen(true)}
          className="h-8 px-2"
        >
          <BarChart3 className="h-3 w-3 mr-1" />
          Analytics
        </Button>
        
        {analyticsStatus && (
          <Badge 
            variant={analyticsStatus.isInitialized ? "default" : "secondary"}
            className="text-xs"
          >
            {analyticsStatus.isInitialized ? "Active" : "Inactive"}
          </Badge>
        )}
      </div>

      <AnalyticsDashboard 
        isOpen={isDashboardOpen} 
        onClose={() => setIsDashboardOpen(false)} 
      />
    </>
  );
};

export default AnalyticsDebug; 