
import { useSelector } from 'react-redux';
import BookItem from './BookItem'
import InputTodo from './InputBook'


const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3vh 0',
};

export default function BookLogic() {
  const books = useSelector((state) => state.books);

  return (
    <>
    <InputTodo />
    <div style={container}>
      {books.map((book) => {
        return <BookItem key={book.item_id} {...book} />
      })}
    </div>
    </>
  )
}
