'use client';
import { PAHButton } from '@/components/PAHButton';
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Spacer,
  useDisclosure,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
export default function FundsButton({ width = 'w-32' }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [money, setMoney] = useState(10);
  const [userData, setUserData] = useState(null);
  const [moneyType, setMoneyType] = useState(['USDT']);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const MoneyTypes = ['USDT', 'ETH', 'BTC'];
  useEffect(() => {
    // Get the value from local storage if it exists
    const userData = localStorage.getItem('user') || '';
    setUserData(JSON.parse(userData));
  }, []);
  const postMoney = () => {
    // console.log(money, moneyType);
    fetch(`/api/user/${userData.user.userID}/bill`, {
      method: 'POST',
      body: JSON.stringify({
        userID: userData.user.userID || 1,
        money,
        type: 'USDT',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          //show success message
          setStatus('success');
        }
        console.log(res);
      });
  };

  return (
    <>
      <PAHButton
        frontColor="bg-black"
        backColor="bg-white"
        width={width}
        textColor="text-white"
        onClick={onOpen}
      >
        add funds
      </PAHButton>
      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-12">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center text-3xl text-center">
                Add Funds
              </ModalHeader>
              <ModalBody>
                <h1 className="text-xl">pick amount</h1>
                <div className="flex w-full justify-between">
                  {['10', '20', '30', '100'].map((item) => (
                    <PAHButton
                      width="w-20"
                      key={item}
                      onClick={() => setMoney(item)}
                    >
                      ${item}
                    </PAHButton>
                  ))}
                </div>
                <h1 className="text-xl">or add mount</h1>
                <div className="flex items-center">
                  <Input
                    type="number"
                    size="lg"
                    aria-label="money"
                    isClearable
                    value={money}
                    onValueChange={setMoney}
                    classNames={{
                      inputWrapper: 'h-12',
                    }}
                    variant="bordered"
                  />
                  <Spacer x="4" />
                  <Select
                    startContent={
                      <span className="i-cryptocurrency-color-usd text-4xl" />
                    }
                    aria-label="money type"
                    size="md"
                    variant="bordered"
                    className="basis-2/5 "
                    selectedKeys={moneyType}
                    onSelectionChange={setMoneyType}
                    classNames={{
                      innerWrapper: 'p-0',
                      mainWrapper: 'h-12',
                    }}
                  >
                    {MoneyTypes.map((type) => (
                      <SelectItem
                        key={type}
                        aria-label={type}
                        labelPlacement="inside"
                        startContent={
                          <span className="i-cryptocurrency-color-usd" />
                        }
                        value={type}
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                {status === 'success' ? (
                  <div className="flex w-full justify-around mt-4">
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-44"
                      textColor="text-white"
                      onClick={onClose}
                    >
                      Submit again
                    </PAHButton>
                    <PAHButton
                      frontColor="bg-black"
                      backColor="bg-white"
                      width="w-28"
                      textColor="text-white"
                      onClick={onClose}
                    >
                      Quit
                    </PAHButton>
                  </div>
                ) : (
                  <PAHButton
                    frontColor="bg-black"
                    backColor="bg-white"
                    width="w-full"
                    textColor="text-white"
                    onClick={postMoney}
                  >
                    Submit
                  </PAHButton>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
