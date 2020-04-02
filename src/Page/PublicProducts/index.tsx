import React, { useEffect, useCallback } from 'react';

import { Button, Spinner, Input } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Header, HeaderButtons } from './styles';
import ProductItem from './ProductItem';
import {
  getProductRequest,
  getNextProductRequest,
  deleteProductRequest,
  duplicateProductRequest,
  saveProductRequest,
} from '../../store/modules/product/actions';
import ButtonRound from '../../Components/Button/ButtonRound';

export default function PublicProducts() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.);
  const loading = useSelector((state) => state.product.loading);
  const page = useSelector((state) => state.product.page);
  const count = useSelector((state) => state.product.count);

  const loadProducts = useCallback(async () => {
    dispatch(getProductRequest());
  }, [dispatch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  function loadMore() {
    if (products.length < count) dispatch(getNextProductRequest(page));
  }

  return (
    <Container>
      <Header
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <>
          <Input />
          <HeaderButtons>
            <Button appearance="ghost" onPress={() => {}}>
              Públicos
            </Button>
            <ButtonRound icon="plus-outline" action={() => {}} />
          </HeaderButtons>
        </>
      </Header>
      <List
        refreshing={loading}
        onRefresh={() => loadProducts()}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadMore()}
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onEdit={() => {}}
            onRemove={(id) => dispatch(deleteProductRequest(id))}
            onDuplicate={(id) => dispatch(duplicateProductRequest(id))}
            onPublication={(product) =>
              dispatch(
                saveProductRequest({ id: product.id, public: !product.public })
              )
            }
          />
        )}
      />
    </Container>
  );
}
