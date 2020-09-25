import { GithubOutlined } from "@ant-design/icons";

const Footer = (props) => {
  return (
    <div className="footer">
      <a href="https://github.com/adamrajch" target="_blank">
        <GithubOutlined />
      </a>

      <style jsx>{`
        min-height: 3vh;
        bottom: 0;
        left: 0;
        // background: white;
        position: fixed;
        width: 100%;
        text-align: center;
      `}</style>
    </div>
  );
};

export default Footer;
