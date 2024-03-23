import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Body } from "@react-email/body";
import { Text } from "@react-email/text";
import { Head } from "@react-email/head";
interface EmailProps {
  userName: string;
  email: string;
  message: string;
}

export const QueryEmail = ({ userName, email, message }: EmailProps) => (
  <Html>
    <head>
      <title>Query From Website</title>
    </head>
    <body>
      <Heading>New Query From Website Contact Form Submission</Heading>
      <Text>
        You have a new message from{" "}
        <span style={{ fontWeight: 700 }}>{userName}</span> (
        <span style={{ fontWeight: 700 }}>{email}</span>) on your website!
      </Text>
      <Text>Their message is following:</Text>
      <Text>{message}</Text>
    </body>
  </Html>
);

export default QueryEmail;
