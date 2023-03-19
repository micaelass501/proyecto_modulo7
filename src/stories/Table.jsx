import { useEffect, useState } from 'react'

const Table = ({filas,columnas,Headers,contenido}) => {
    const [data, setData] = useState([]);
    const generateData = (filas,columnas,Headers) => {
        const newData = [];
        for (let i = 0; i < filas; i++) {
          if(i==0){
            const row = [];
            for (let j = 1; j <= columnas; j++) {
              row.push(Headers+" "+j);
            }
            newData.push(row);
          }else{
            const row = [];
            for (let j = 0; j < columnas; j++) {
              row.push(contenido);
            }
            newData.push(row);
          }      
        }
        setData(newData);
        console.log(newData);
    };
    useEffect(() => {
        generateData(filas,columnas,Headers);
    });
    return<>
        {/* {filas} <br />
        {columnas} <br />
        {Headers} <br /> */}
        <table>
            <tbody>
                {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                    <td key={cellIndex}> {cell} </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table> 
    </>
};

export default Table;