
import { useSelector } from 'react-redux';
import BookItem from './BookItem'
import InputTodo from './InputBook'


const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3vh 0',
  gap: '2vh'
};

export default function BookLogic() {
  const books = useSelector((state) => state.books);

  return (
    <div style={container}>
      <InputTodo />
      {books.map((book) => {
        return <BookItem key={book.item_id} {...book} />
      })}
    </div>
  )
}
