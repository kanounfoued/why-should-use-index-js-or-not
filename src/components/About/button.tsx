import { useNavigate } from "react-router-dom";

export default function Button({ label, to }: { label: string; to: string }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(to);
  };

  return <button onClick={onClick}>{label}</button>;
}
