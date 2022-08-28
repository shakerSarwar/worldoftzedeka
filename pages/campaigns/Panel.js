import React, { useState, useEffect, useRef } from "react";
export default React.forwardRef(({ index }, ref) => (
  <div ref={ref}>{index + 1}</div>
));
// import React, { useState, useEffect, useRef } from "react";
// export default ForwardRef(({ index }, ref) => <div ref={ref}>{index + 1}</div>);
