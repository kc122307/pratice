import React from "react";
import Link from "next/link";
const Header = (props) =>{
return(
<>
<div className="h-16 text-white bg-green-500 flex items-center justify-between p-5">
<h2>Logo</h2>
<div className="gap-6 flex">
<Link href="\About">About</Link>
<Link href="\Courses">Courses</Link>
<Link href="\Product">Product</Link>
</div>
</div>
</>
)
}

export default Header