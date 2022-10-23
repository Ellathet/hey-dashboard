import { Button, Layout, Table } from "antd";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import { SendNotificationModal } from "../../components/sendNotificationModal/SendNotificationModal";
import { useNotification } from "../../hooks/useNotification/useNotification";
import { INotificationResponseData } from "../../services/notification";

export const Home = () => {
  const { Header, Content } = Layout;

  const { notifications, getNotifications, loading, sendNotification } =
    useNotification();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    getNotifications();
  }, []);

  const sendNotificationSubmit = (
    data: Omit<INotificationResponseData, "id" | "createdAt">
  ) => {
    sendNotification(data);
    setIsModalOpen((state) => !state);
  };

  return (
    <>
      <SendNotificationModal
        isOpen={isModalOpen}
        sendNotification={sendNotificationSubmit}
        onCancel={() => setIsModalOpen((state) => !state)}
        loading={loading}
      />
      <Layout className="home">
        <Header className="d-flex align-items-center">
          <img
            alt="hey-logo"
            height="66"
            width="142"
            src="https://user-images.githubusercontent.com/76699403/197346176-7a86089d-facf-418c-ad0d-fd893171c129.png"
          />
        </Header>
        <Content className="home-container">
          <div className="d-flex flex-direction-row align-items-center justify-content-between">
            <h2>Notifications</h2>
            <Button
              type="primary"
              onClick={() => setIsModalOpen((state) => !state)}
              disabled={loading}
              loading={loading}
            >
              Send notification
            </Button>
          </div>
          <Table
            loading={loading}
            dataSource={notifications}
            columns={[
              {
                title: "Title",
                dataIndex: "title",
                key: "title",
              },
              {
                title: "Text",
                dataIndex: "text",
                key: "text",
              },
              {
                title: "Sent at",
                key: "sentAt",
                dataIndex: "sentAt",
                render: (sentAt) =>
                  DateTime.fromISO(sentAt, { zone: "utc" }).toFormat(
                    "MM/dd/yyyy - HH:mm"
                  ),
              },
            ]}
          />
        </Content>
      </Layout>
    </>
  );
};
