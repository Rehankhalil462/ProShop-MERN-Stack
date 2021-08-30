import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/product/Product.component';
import { listProducts } from '../../redux/reducers/product/product.actions';
import ErrorMessage from '../../components/errormessage/errormessage';
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';

import Paginate from '../../components/Paginate/Paginate';
import ProductCarousel from '../../components/ProductCarousal/ProductCarousal';
import Meta from '../../components/Meta/Meta';

const HomePage = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-dark'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage variant='danger'>{error}</ErrorMessage>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};
export default HomePage;
