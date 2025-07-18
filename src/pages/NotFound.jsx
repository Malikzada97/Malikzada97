import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 - {t('notFound.title')} | Mudassir Javed</title>
        <meta name="description" content={t('notFound.description')} />
      </Helmet>

      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-9xl font-bold text-gradient mb-4">404</div>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-h1">{t('notFound.title')}</h1>
              
              <p className="text-body-lg text-muted-foreground max-w-md mx-auto">
                {t('notFound.description')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center pt-8">
                <Link to="/" className="btn-primary group">
                  <FiHome className="mr-2 w-4 h-4" />
                  <span>{t('notFound.goHome')}</span>
                </Link>
                
                <button
                  onClick={() => window.history.back()}
                  className="btn-outline group"
                >
                  <FiArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>{t('notFound.goBack')}</span>
                </button>
              </div>

              {/* Quick Links */}
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground mb-4">{t('notFound.exploreSections')}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { path: '/about', label: t('notFound.quickLinks.aboutMe') },
                    { path: '/projects', label: t('notFound.quickLinks.projects') },
                    { path: '/skills', label: t('notFound.quickLinks.skills') },
                    { path: '/contact', label: t('notFound.quickLinks.contact') }
                  ].map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="btn-ghost"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFound;