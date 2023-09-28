export const Label = ({ tag }: { tag: string }) => {
  return (
    <>
      <label
        htmlFor="FirstName"
        className="block text-sm font-medium text-gray-700"
      >
        {tag}
      </label>
    </>
  );
};
