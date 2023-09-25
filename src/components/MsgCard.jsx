import { Card, CardBody, Image } from '@nextui-org/react';
export function MsgCard(props) {
  return (
    <>
      <Card className="w-72 p-2">
        <CardBody>
          <div className="flex items-center	">
            <div className="text-2xl mr-4">{props.title}</div>
            <Image
              src={props.imgSrc}
              width={40}
              height={40}
              alt="logo"
              radius="sm"
            ></Image>
          </div>
          <div>
            <div>{props.description}</div>
            <div className="text-2xl mt-2">{props.amount}</div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
