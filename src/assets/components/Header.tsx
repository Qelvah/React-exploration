import "./Header.css";

interface Props {
  mainText: string;
  subText?: string;
}

function Header({ mainText, subText }: Props) {
  return (
    <div id="header">
      {mainText}
      {subText && `, ${subText}`}
    </div>
  );
}

export default Header;
