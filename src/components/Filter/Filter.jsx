import { nanoid } from 'nanoid';
import { Input, Label, Container } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { change } from 'redux/filterSlice';

const filterInputId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.filter.value);

  return (
    <Container>
      <Label htmlFor={filterInputId}>Find</Label>
      <Input
        id={filterInputId}
        onChange={e => dispatch(change(e.target.value))}
        type="text"
        value={value}
      />
    </Container>
  );
};
