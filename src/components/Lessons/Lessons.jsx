import classes from "./Lessons.module.scss";

const Lessons = () => {
  const { id } = useParams();
  const titles = ["A1", "A2", "B1"]; 
  const title = titles.map((i) => {
    return i;
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/tours/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);


  return (
    <div className={classes.Lessons}>
      <h2>{title}</h2>
    </div>
  );
};

export default Lessons;
