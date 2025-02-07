import { ProTable } from "@ant-design/pro-components";
import { Segmented } from "antd";
import { useState } from "react";
import { SAMPLE_REMAINING, REMAINING_COLUMNS } from "./sample";

const SEGMENT_OPTIONS = [
  {
    label: "Ачаа дөхөлт",
    value: "load-factor",
  },
  {
    label: "Үлдэгдэл",
    value: "capacity",
  },
  {
    label: "Талбайд ирсэнээр",
    value: "site-received",
  },
];
export default function SiteRegistrationPage() {
  const [segment, setSegment] = useState(SEGMENT_OPTIONS[0].value);

  return (
    <>
      <Segmented
        options={SEGMENT_OPTIONS}
        onChange={setSegment}
        style={{ marginBottom: "32px" }}
      />
      <ProTable
        rowKey="id"
        dataSource={SAMPLE_REMAINING}
        columns={REMAINING_COLUMNS}
        options={false}
        search={false}
      />
    </>
  );
}
