const ListProduct = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{item.name}</td>
          <td>{item.cost}</td>
          <td>{item.totalCount}</td>
          <td>
                  <a className="btn btn-sm btn-primary" href={'/admin/deliveries/'+item.id}>
                    Detail
                  </a>
                </td>
        </tr>
        ))}
      </>
    );
  };
  
  export default ListProduct;