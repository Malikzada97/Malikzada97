import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiX, FiExternalLink, FiCode, FiDatabase, FiTrendingUp, FiUsers, FiCalendar, FiMapPin } from 'react-icons/fi';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';
import { searchData, popularSearches, quickAccessLinks } from '../data/searchData';

const SearchBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Search function with improved relevance scoring
  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const results = searchData
        .map(item => {
          const queryLower = searchQuery.toLowerCase();
          const titleMatch = item.title.toLowerCase().includes(queryLower);
          const descMatch = item.description.toLowerCase().includes(queryLower);
          const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(queryLower));
          const categoryMatch = item.category.toLowerCase().includes(queryLower);
          
          // Calculate relevance score
          let score = 0;
          if (titleMatch) score += 10;
          if (descMatch) score += 5;
          if (tagMatch) score += 3;
          if (categoryMatch) score += 2;
          if (item.featured) score += 1;
          
          return { ...item, score };
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8); // Limit to 8 results
      
      setSearchResults(results);
      setIsLoading(false);
    }, 300);
  };

  // Handle search input changes with debouncing
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : searchResults.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (focusedIndex >= 0 && searchResults[focusedIndex]) {
            handleResultClick(searchResults[focusedIndex]);
          }
          break;
        case 'Escape':
          handleClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, searchResults]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setFocusedIndex(-1);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setSearchResults([]);
    setFocusedIndex(-1);
  };

  const handleResultClick = (result) => {
    // Navigate to the result
    window.location.href = result.path;
    handleClose();
  };

  const getTypeColor = (type) => {
    const colors = {
      project: 'bg-blue-500',
      skill: 'bg-green-500',
      service: 'bg-purple-500',
      blog: 'bg-orange-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getTypeLabel = (type) => {
    const labels = {
      project: t('search.typeLabels.project'),
      skill: t('search.typeLabels.skill'),
      service: t('search.typeLabels.service'),
      blog: t('search.typeLabels.blog')
    };
    return labels[type] || 'Item';
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleOpen}
        className="relative group"
        aria-label={t('common.search')}
        data-search-trigger
      >
        <FiSearch className="w-4 h-4 group-hover:scale-110 transition-transform" />
      </Button>
      
      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={handleClose}
            />
            
            {/* Search Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-full right-0 mt-2 w-96 bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Search Input */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <FiSearch className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    id="search-input"
                    name="search"
                    placeholder={t('search.placeholder')}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-muted-foreground"
                    autoFocus
                    data-search-input
                    autoComplete="off"
                    aria-label={t('search.placeholder')}
                    aria-describedby="search-instructions"
                  />
                  {query && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuery('')}
                      className="h-6 w-6"
                    >
                      <FiX className="w-3 h-3" />
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="p-6 text-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
                    <p className="text-sm text-muted-foreground mt-2">{t('search.searching')}</p>
                  </div>
                ) : query ? (
                  searchResults.length > 0 ? (
                    <div className="p-2">
                      {searchResults.map((result, index) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleResultClick(result)}
                            className={cn(
                              "w-full text-left p-3 rounded-xl transition-all duration-200 group",
                              focusedIndex === index
                                ? "bg-primary-muted border border-primary/20"
                                : "hover:bg-muted border border-transparent"
                            )}
                            onMouseEnter={() => setFocusedIndex(index)}
                          >
                            <div className="flex items-start space-x-3">
                              {/* Icon */}
                              <div className={cn(
                                "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                getTypeColor(result.type)
                              )}>
                                <result.icon className="w-4 h-4 text-white" />
                              </div>
                              
                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                                    {result.title}
                                  </h4>
                                  <Badge variant="secondary" className="text-xs">
                                    {getTypeLabel(result.type)}
                                  </Badge>
                                  {result.featured && (
                                    <Badge variant="default" className="text-xs bg-primary">
                                      {t('search.featured')}
                                    </Badge>
                                  )}
                                </div>
                                
                                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                                  {result.description}
                                </p>
                                
                                <div className="flex items-center space-x-2">
                                  <FiMapPin className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">
                                    {result.category}
                                  </span>
                                </div>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {result.tags.slice(0, 3).map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                  {result.tags.length > 3 && (
                                    <span className="text-xs text-muted-foreground">
                                      +{result.tags.length - 3} {t('search.moreTags')}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              {/* External link icon */}
                              <FiExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                            </div>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <FiSearch className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium mb-1">{t('search.noResults')}</p>
                      <p className="text-xs text-muted-foreground">
                        {t('search.tryDifferentKeywords')}
                      </p>
                    </div>
                  )
                ) : (
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-3">{t('search.popularSearches')}</h3>
                        <div className="flex flex-wrap gap-2">
                          {popularSearches.map((term) => (
                            <button
                              key={term}
                              onClick={() => setQuery(term)}
                              className="text-xs bg-muted hover:bg-muted/80 px-3 py-1 rounded-full transition-colors"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-3">{t('search.quickAccess')}</h3>
                        <div className="space-y-2">
                          {quickAccessLinks.map((item) => (
                            <button
                              key={item.path}
                              onClick={() => {
                                window.location.href = item.path;
                                handleClose();
                              }}
                              className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-muted transition-colors text-left"
                            >
                              <item.icon className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{item.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="p-3 border-t border-border bg-muted/20">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{t('search.pressEscToClose')}</span>
                  <span>↑↓ {t('search.toNavigate')}, {t('search.enterToSelect')}</span>
                </div>
                <div id="search-instructions" className="sr-only">
                  {t('search.pressEscToClose')}. {t('search.toNavigate')}. {t('search.enterToSelect')}.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar; 