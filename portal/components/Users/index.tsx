import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, List, Skeleton, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { getUsers, state } from "../../store/reducers/auth";
import Form from "../Form";

interface DataType {
  _id: string;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  const dispatch: any = useDispatch();
  const { usersList } = useSelector(state);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);
  const [addUser, setAddUser] = useState<boolean>(false);
  const [editUser, setEditUser] = useState<DataType | null>(null);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    dispatch(getUsers());
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    if (usersList) {
      setData(usersList);
      setLoading(false);
    }
  }, [usersList]);

  if(addUser) return <Form addUser onCloseForm={() => setAddUser(false)} />
  
  if(editUser) return <Form editUser={editUser} onCloseForm={() => setEditUser(null)} />
  
  return (
    <>
      <div
        id="scrollableDiv"
        style={{
          height: 400,
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                key={item._id}
                actions={[<a key="list-loadmore-edit" onClick={() => setEditUser(item)}>edit</a>]}
              >
                <List.Item.Meta
                  title={<a>{item.name}</a>}
                  description={item.email}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      <Button type="primary" style={{ marginTop: 30 }} onClick={() => setAddUser(true)}>
        Add User
      </Button>
    </>
  );
};

export default UsersPage;
