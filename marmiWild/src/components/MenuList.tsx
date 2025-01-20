import MenuItem from './MenuItems';

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {/* render a MenuItem component for each element of the foodItems array */}
      {foodItems.map((id) => (
        <MenuItem key={id} />
      ))}


    </>
  );
}

export default MenuList;