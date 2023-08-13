
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const reorderCardsByColumnId = (cardsByColumnId, source, destination) => {
  const current = [...cardsByColumnId[source.droppableId]];
  const next = [...cardsByColumnId[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index);
    const result = {
      ...cardsByColumnId, [source.droppableId]: reordered,
    };
    return {
      cardsByColumnId: result,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  const result = {
    ...cardsByColumnId, [source.droppableId]: current, [destination.droppableId]: next,
  };

  return {
    cardsByColumnId: result,
  };
};
