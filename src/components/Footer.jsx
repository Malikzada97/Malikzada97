import { FiGithub, FiLinkedin, FiMail, FiHeart, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiFreelancer } from 'react-icons/si';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: t('social.github'),
      url: 'https://github.com/mudassirjaved',
      icon: FiGithub,
      color: 'hover:text-foreground'
    },
    {
      name: t('social.linkedin'),
      url: 'https://www.linkedin.com/in/malikzada-mudassir',
      icon: FiLinkedin,
      color: 'hover:text-primary'
    },
    {
      name: t('social.freelancer'),
      url: 'https://www.freelancer.pk/u/MudassirJDev',
      icon: SiFreelancer,
      color: 'hover:text-accent'
    },
    {
      name: t('social.fiverr'),
      url: 'https://www.fiverr.com/users/malikzada97',
      icon: FiGlobe,
      color: 'hover:text-accent'
    },
    {
      name: t('social.facebook'),
      url: 'https://www.facebook.com/haris.prince.14',
      icon: FaFacebook,
      color: 'hover:text-accent'
    }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Tilt
                key={link.name}
                glareEnable={true}
                glareMaxOpacity={0.18}
                scale={1.08}
                transitionSpeed={200}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="inline-block"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-muted ${link.color} transition-all duration-300 transform hover:scale-110 group shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:text-primary" />
                  {/* Animated Glow */}
                  <span className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-primary/30 to-secondary/30" />
                </a>
              </Tilt>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>{t('footer.copyright')}</span>
              <FiHeart className="w-4 h-4 text-destructive animate-pulse" />
              <span>{t('footer.builtWith')}</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t('footer.developerTitle')}
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-ghost text-sm"
          >
            {t('footer.backToTop')} ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;