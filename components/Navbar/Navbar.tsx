import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* <Avatar className="w-4 h-4">
        <AvatarImage
          src="/buildplyo.png"
          alt="@buildplyo"
        />
        <AvatarFallback>BuildPlyo Logo</AvatarFallback>
      </Avatar> */}
      <Link to="/">Home</Link>
      <Link to="/View">View</Link>
      <Link to="/Edit">Edit</Link>
    </div>
  );
}
