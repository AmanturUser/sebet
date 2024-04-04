const ListCategory = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{item.name}</td>
          <td>{item.createDate}</td>
          <td>
                  <a className="btn btn-sm btn-danger" href='#'>
                    Delete
                  </a>
                </td>
        </tr>
        ))}
      </>
    );
  };
  
  export default ListCategory;