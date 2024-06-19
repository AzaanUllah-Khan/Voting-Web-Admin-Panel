import React from 'react';
import { Flex, Input, Typography } from 'antd';
const { Title } = Typography;
const Password = () => {
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChange,
    };
    return (
        <Flex gap="middle" align="flex-start" vertical>
            <h1 style={{ color: "#333", fontSize: "16px", fontWeight: "normal" }}>Enter Password</h1>
            <Input.OTP mask="*" {...sharedProps} />
        </Flex>
    );
};
export default Password;