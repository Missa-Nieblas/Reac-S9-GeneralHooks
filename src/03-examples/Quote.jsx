
export const Quote = ({name, id}) => {
  return (
                <blockquote className="blockquote text-left">
                    <p className="mb-1">{name}</p>
                    <footer className="blockquote-footer"> {id}  </footer> 
                </blockquote>
  )
}
