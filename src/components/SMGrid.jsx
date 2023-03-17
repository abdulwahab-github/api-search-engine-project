import { useEffect, useState } from "react";
function SMGrid(props) {
const [first, setfirst] = useState("")
  const [inpt,setinpt ] = useState("")

    const { datasource, title, cols , val,dat,sel,} = props;
    useEffect(() => {
      console.log(sel)
       setinpt(val)
      setfirst(sel)
  }, [val])
    return (
      <>
        <div>
          <div>
            <h2>{title}</h2>
          </div>
          {datasource && Array.isArray(datasource) && (
            <table className="table table-striped">
              <thead>
                <tr>
                  {cols && Array.isArray(cols) && cols.length > 0
                    ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                    : null}
                </tr>
              </thead>
              <tbody>
                {datasource.filter((x, i) => {
                            if (val == "") {
                                return x
                            }else if (x.first??x.name.toLowerCase().includes(inpt.toLowerCase())) {
                              return x
                          }}).map((x, i) => (
                  <tr key={i}>
                    {cols.map((e, ind) => (
                      <td key={ind}>
                          {x[e.key]}                    
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
  export default SMGrid;