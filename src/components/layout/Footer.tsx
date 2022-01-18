import { VscDebugConsole } from 'react-icons/vsc';

const Footer = () => {
  const footerCopyright = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        <VscDebugConsole className="inline pr-2 text-3xl" />
        <p>Copyright &copy; {footerCopyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
