import React from "react";
import Link from 'next/link'

const Breadcrumb = ({ route = [] }) => {
  return <div className="flex gap-1.5">
    {
        route.map((item, index) => {
            return (
                <div className="flex gap-1.5" key={`breadcrumb-${index}`}>
                    <Link href={item.link}>
                    { item.title }
                    </Link>
                    {
                        index < route.length-1 &&
                        <div>
                            {`>`}
                        </div>
                    }
                </div>
            )
        })
    }
  </div>;
};

export default Breadcrumb;
