import PropTypes from "prop-types";
import "./AnimatedText.css";

const AnimatedText = ({
  href,
  className,
  as: Component = "span",
  children,
  ...props
}) => {
  return (
    <Component className={`animated-text ${className || ""}`}>
      <a href={href} {...props}>
        {children}
      </a>
    </Component>
  );
};

AnimatedText.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default AnimatedText;
