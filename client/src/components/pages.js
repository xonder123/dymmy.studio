import React, {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

const Pages = observer( () => {
	
  const {device} = useContext(Context)

  const pageCount = Math.ceil(device.totalCount / device.limit)
  const pages = [1,2,3,4,5,6,7]

  
  return (
        
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item key={page} active={device.page === page} onClick={() => device.setPage(page)}>{page}</Pagination.Item>
                )}
        
        </Pagination>


  );
})

export default  Pages;
