import { Button, Form, Input, Modal } from "antd";

import { INotificationResponseData } from "../../services/notification";

interface ISendNotificationModalProps {
  isOpen: boolean;
  sendNotification: (
    // eslint-disable-next-line no-unused-vars
    data: Omit<INotificationResponseData, "id" | "createdAt">
  ) => void;
  onCancel: () => void;
  loading: boolean;
}

export const SendNotificationModal = ({
  isOpen,
  onCancel,
  sendNotification,
  loading,
}: ISendNotificationModalProps) => {
  return (
    <Modal
      className="send-notification-modal"
      open={isOpen}
      footer={[
        <Button
          type="primary"
          key="submit"
          htmlType="submit"
          form="sendNotification"
          disabled={loading}
          loading={loading}
        >
          Send
        </Button>,
        <Button
          key="cancel"
          onClick={onCancel}
          loading={loading}
          disabled={loading}
        >
          Cancel
        </Button>,
      ]}
      title="Add Notification"
    >
      <Form
        name="sendNotification"
        autoComplete="off"
        onFinish={(values) => {
          sendNotification(values);
        }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input disabled={loading} />
        </Form.Item>
        <Form.Item
          label="Text"
          name="text"
          rules={[
            {
              required: true,
              message: "Text is required",
            },
          ]}
        >
          <Input.TextArea
            placeholder="write notification text..."
            maxLength={1000}
            disabled={loading}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
