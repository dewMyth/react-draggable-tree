import { useState } from "react";
import { Tree } from "antd";

const { TreeNode } = Tree;

const data = [
  {
    title: "test 1",
    key: "1",
    children: [
      {
        title: "test 1.1",
        key: "1-1",
        children: [
          {
            title: "test 1.11",
            key: "1-1-1",
          },
          {
            title: "test 1.12",
            key: "1-1-2",
          },
          {
            title: "test 1.13",
            key: "1-1-3",
          },
        ],
      },
    ],
  },
  {
    title: "test 2",
    key: "2",
    children: [
      {
        title: "test 2.1",
        key: "2-1",
      },
    ],
  },
  {
    title: "test 3",
    key: "3",
    children: [
      {
        title: "test 3.1",
        key: "3-1",
      },
    ],
  },
];

function AntTree() {
  const [treeData, setTreeData] = useState(data);

  const onDrop = (info) => {
    const { dropToGap, node, dragNode } = info;

    // Find the parent node of the dragged node
    const findParent = (data, key) => {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.key === key) {
          return { data, index: i };
        } else if (item.children) {
          const result = findParent(item.children, key);
          if (result) {
            return result;
          }
        }
      }
      return null;
    };

    const dragNodeParent = findParent(treeData, dragNode.key);

    // Remove the dragged node from its previous location
    dragNodeParent.data.splice(dragNodeParent.index, 1);

    // Find the new parent node and index
    const dropNodeParent = findParent(treeData, node.key);

    const dropIndex = dropToGap ? node.index : dropNodeParent.index + 1;

    // Insert the dragged node into the new location
    dropNodeParent.data.splice(dropIndex, 0, dragNode);

    // Update the tree data state
    setTreeData([...treeData]);
  };

  const renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  };

  return (
    <Tree draggable onDrop={onDrop} treeData={treeData}>
      {renderTreeNodes(treeData)}
    </Tree>
  );
}

export default AntTree;
