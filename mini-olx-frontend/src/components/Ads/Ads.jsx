import React from "react";
import { DeleteFilled } from "@ant-design/icons";
import { Card, Space } from "antd";
import Title from "antd/lib/typography/Title";
import Layout from "antd/lib/layout/layout";
import "./Ads.css";

const { Meta } = Card;

const Ads = ({ ads = [], onDeleteAd = () => {} }) => {
  return (
    <Layout>
      <Title level={2}>All Ads</Title>
      <ul className="list__ads">
        <Space wrap>
          {ads?.map((ad) => {
            return (
              <li key={ad.id}>
                <Card
                  style={{ width: 240 }}
                  cover={
                    ad.ad_image ? (
                      <img
                        alt="example"
                        src={ad.ad_image}
                        className="img__ad-card"
                      />
                    ) : null
                  }
                  actions={[
                    <DeleteFilled
                      key={"delete-ad"}
                      onClick={() => onDeleteAd(ad.id)}
                    />,
                  ]}>
                  <Meta title={ad.title} description={ad.description} />
                  <p>Price: {ad.price}</p>
                  <p>ID: {ad.id}</p>
                </Card>
              </li>
            );
          })}
        </Space>
      </ul>
    </Layout>
  );
};

export default Ads;
