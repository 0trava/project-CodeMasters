import React from 'react';

export const AddTaskBtn = ({ groupId, openCreateModal }) => {
  const handleOpenCreateModal = () => {
    openCreateModal(groupId);
  };

  return (
    <div className="add-task-btn">
      <button onClick={handleOpenCreateModal}>
        <span className="plus">+</span>Add task
      </button>
    </div>
  );
};
