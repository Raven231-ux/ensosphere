import linkedin from "../assets/social/linkedin.svg";
import instagram from "../assets/social/instagram.svg";
import facebook from "../assets/social/facebook.svg";

const icons = {
  LinkedIn: linkedin,
  Instagram: instagram,
  Facebook: facebook,
};

export default function SocialIcon({ label, className = "h-4 w-4" }) {
  const src = icons[label];
  if (!src) return null;

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`${className} shrink-0 object-contain`}
    />
  );
}
