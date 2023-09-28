import React from "react";

export const MaterialLabel = ({ tag }: { tag: string }) => (
  <>
    <label htmlFor={tag} className="sr-only">
      {tag}
    </label>
  </>
);
