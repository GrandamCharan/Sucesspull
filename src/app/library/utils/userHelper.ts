export const getCrown = (level: number) => {
  if (level >= 150)
    return {
      src: "/images/levels/Platinum.png",
      title: "Platinum",
      bg: "bg-gray-400",
    };
  if (level >= 100)
    return {
      src: "/images/levels/Gold.png",
      title: "Gold",
      bg: "bg-yellow-500",
    };
  if (level >= 50)
    return {
      src: "/images/levels/Silver.png",
      title: "Silver",
      bg: "bg-gray-300",
    };
  return {
    src: "/images/levels/Bronze.png",
    title: "Bronze",
    bg: "bg-yellow-700",
  };
};
