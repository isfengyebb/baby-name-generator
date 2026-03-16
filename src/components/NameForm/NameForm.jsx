import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Card,
  DatePicker,
  Stepper,
  TextArea,
  Toast,
} from 'antd-mobile';
import { GENDER_OPTIONS, DEFAULT_COUNT } from '../../constants';
import './NameForm.css';

function NameForm({ onSubmit }) {
  const [gender, setGender] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [birthDate, setBirthDate] = useState(null);

  const handleFinish = (values) => {
    if (!gender) {
      Toast.show({ content: '请选择宝宝性别', position: 'top' });
      return;
    }

    if (!birthDate) {
      Toast.show({ content: '请选择出生日期', position: 'top' });
      return;
    }

    const params = {
      surname: values.surname.trim(),
      gender,
      birthDate: formatDate(birthDate),
      preference: values.preference?.trim() || '',
      count: values.count || DEFAULT_COUNT,
    };

    onSubmit(params);
  };

  return (
    <div className="name-form">
      <div className="name-form-header">
        <span className="name-form-icon">🏮</span>
        <h1 className="name-form-title">宝宝起名助手</h1>
        <p className="name-form-subtitle">智能起名 · 传承国学经典</p>
      </div>

      <Card className="name-form-card">
        <Form
          layout="horizontal"
          onFinish={handleFinish}
          footer={
            <div className="name-form-submit">
              <Button
                block
                type="submit"
                color="primary"
                className="name-form-submit-btn"
              >
                开始起名
              </Button>
            </div>
          }
        >
          <Form.Item
            label="姓氏"
            name="surname"
            rules={[{ required: true, message: '请输入姓氏' }]}
          >
            <Input placeholder="请输入姓氏" maxLength={2} clearable />
          </Form.Item>

          <Form.Item label="性别" required>
            <div className="name-form-gender-selector">
              {GENDER_OPTIONS.map((opt) => (
                <Button
                  key={opt.value}
                  className="name-form-gender-btn"
                  color={gender === opt.value ? 'primary' : 'default'}
                  fill={gender === opt.value ? 'solid' : 'outline'}
                  onClick={() => setGender(opt.value)}
                >
                  {opt.label}
                </Button>
              ))}
            </div>
          </Form.Item>

          <Form.Item
            label="出生日期"
            required
            onClick={() => setDatePickerVisible(true)}
          >
            <div>
              {birthDate ? formatDate(birthDate) : (
                <span className="name-form-date-placeholder">
                  请选择出生日期
                </span>
              )}
            </div>
            <DatePicker
              visible={datePickerVisible}
              onClose={() => setDatePickerVisible(false)}
              onConfirm={(val) => setBirthDate(val)}
              max={new Date()}
              min={new Date(2020, 0, 1)}
            />
          </Form.Item>

          <Form.Item label="生成数量" name="count" initialValue={DEFAULT_COUNT}>
            <Stepper min={1} max={10} />
          </Form.Item>

          <Form.Item label="偏好描述" name="preference">
            <TextArea
              placeholder="如：希望名字有诗意、大气，或包含特定字..."
              rows={2}
              maxLength={100}
              showCount
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

/**
 * 格式化日期为 YYYY-MM-DD
 */
function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default NameForm;
