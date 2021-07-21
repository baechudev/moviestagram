import "./Footer.css";

const Footer = () => {
  return (
    <div className="footBar">
      <div className="footBar-logo">
        <i className="fas fa-leaf"></i>
        <span>BaechuDev</span>
      </div>

      <ul className="footBar-info">
        <li>
          <a href="https://linkedin.com/in/jason-dongwook-hwang">About</a>
        </li>
        <li>
          <a href="mailto:dwhwang423@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
