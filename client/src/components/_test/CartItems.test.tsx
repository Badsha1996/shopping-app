import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/Store';
import CartItems from '../CartItems';
import { addTotal } from '../../redux/shoppingSlice';

describe('CartItems', () => {
    test('displays "The Cart is Empty" when the cart is empty', () => {
        render(
            <Provider store={store}>
                <CartItems />
            </Provider>
        );

        const emptyCartMessage = screen.getByText(/The Cart is Empty/i);
        expect(emptyCartMessage).toBeInTheDocument();
    });

    test('displays cart items and their prices when the cart is not empty', () => {
        // add items to the store to test the cart with items
        store.dispatch(addTotal({ title: 'Item 1', image: 'item1.jpg', price: 10, total: 1 }));
        store.dispatch(addTotal({ title: 'Item 2', image: 'item2.jpg', price: 20, total: 2 }));

        render(
            <Provider store={store}>
                <CartItems />
            </Provider>
        );


    });
});


