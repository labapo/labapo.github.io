// import React, { useRef, useEffect } from 'react'

// const { tableau } = window; 

// function Dashboard() {
//     const ref = useRef(null);
//     const url = "https://public.tableau.com/views/Dashboard_HMEA/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"

//     const initViz = () => {
//       new tableau.Viz(ref.current, url, {
//         width: "100%",
//         height: "95vh",
//       })
//     }

//     useEffect(initViz, []);
//   return (
//     <div ref={ref} />
//   )
// }

// export default Dashboard