import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Line,
  CheckBox,
  List,
  Input,
} from "components";

const ResultsPagePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/homepage");
  }
  function handleNavigate3() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Img
              src="images/img_combinedshape.png"
              className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[12%]"
              alt="CombinedShape"
            />
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[574px] xl:ml-[656px] 2xl:ml-[738px] 3xl:ml-[886px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]"
              onClick={handleNavigate2}
            >
              Explore
            </Text>
            <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
              Search
            </Text>
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]"
              onClick={handleNavigate3}
            >
              Hotels
            </Text>
            <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]">
              Offers
            </Text>
            <Img
              src="images/img_notification.svg"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] w-[1%]"
              alt="notification"
            />
            <Img
              src="images/img_unsplashd1upki.png"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
              alt="unsplashd1UPki"
            />
          </Row>
        </header>
        <Column className="bg-gradient3  font-baloobhai items-center w-[100%]">
          <Stack className="bg-gradient2  lg:h-[282px] xl:h-[323px] 2xl:h-[363px] 3xl:h-[435px] w-[100%]">
            <Img
              src="images/img_bannerbackgro.png"
              className="absolute lg:h-[282px] xl:h-[323px] 2xl:h-[363px] 3xl:h-[435px] w-[100%]"
              alt="BannerBackgrou"
            />
            <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[89%]">
              <Text className="font-normal not-italic lg:text-[47px] xl:text-[54px] 2xl:text-[61px] 3xl:text-[73px] text-white_A700 w-[auto]">
                Where are you off too?
              </Text>
              <Row className="bg-white_A700 font-roboto items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius10 w-[100%]">
                <Column className="border border-black_900_3a border-solid xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[28%]">
                  <Text className="bg-white_A700 font-normal ml-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_99 tracking-ls1 w-[54px]">
                    Departure
                  </Text>
                  <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900_dd tracking-ls1 w-[auto]">
                    Singapore (SIN)
                  </Text>
                </Column>
                <Column className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[28%]">
                  <Column className="bg-white_A700 items-center ml-[4px] w-[11%]">
                    <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"></div>
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_99 tracking-ls1 w-[auto]">
                      Arrival
                    </Text>
                  </Column>
                  <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900_dd tracking-ls1 w-[auto]">
                    Los Angeles (LA)
                  </Text>
                </Column>
                <Column className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[28%]">
                  <Column className="bg-white_A700 items-center ml-[4px] w-[8%]">
                    <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"></div>
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_99 tracking-ls1 w-[auto]">
                      Date
                    </Text>
                  </Column>
                  <Row className="items-center justify-between lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[99%]">
                    <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900_dd tracking-ls1 w-[auto]">
                      01/05/2022
                    </Text>
                    <Img
                      src="images/img_trash.svg"
                      className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[5%]"
                      alt="trash"
                    />
                  </Row>
                </Column>
                <Button
                  className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[13%]"
                  size="lg"
                >
                  Search flights
                </Button>
              </Row>
            </Column>
          </Stack>
        </Column>
        <Row className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[89%]">
          <Column className="w-[27%]">
            <Text className="font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 tracking-ls1 w-[auto]">
              10 out of 177 Results
            </Text>
            <Line className="bg-gray_201 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[89%]" />
            <Text className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_700 tracking-ls1 w-[auto]">
              Stops
            </Text>
            <CheckBox
              className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Two"
              label="1 Stop"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Three"
              label="2 Stops"
            ></CheckBox>
            <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_700 tracking-ls1 w-[auto]">
              Booking Options
            </Text>
            <CheckBox
              className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Five"
              label="Book on Fickleflight"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic pb-[1px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Six"
              label="Official Airline Websites"
            ></CheckBox>
            <Text className="font-bold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_700 tracking-ls1 w-[auto]">
              Flight Experience
            </Text>
            <CheckBox
              className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Eight"
              label="No overnight flights"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Nine"
              label="No long stop-overs"
            ></CheckBox>
            <Line className="bg-gray_201 h-[1px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]" />
            <Text className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_700 tracking-ls1 w-[auto]">
              Airlines
            </Text>
            <CheckBox
              className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Eleven"
              label="Singapore Airlines"
            ></CheckBox>
            <CheckBox
              className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-gray_700 tracking-ls1"
              inputClassName="h-[20px] mr-[5px] w-[20px]"
              name="10Results Twelve"
              label="Qatar Airways"
            ></CheckBox>
          </Column>
          <Column className="w-[73%]">
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[4%]"
                  alt="signal"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  Turkish Airlines
                </Text>
                <Column className="lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[16%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    11:35 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[20%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[60%]"
                    alt="FlightIcon"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    33H 10M, 1-stop
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[9%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    4:45 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 723
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_arrowright_46X34.svg"
                  className="lg:h-[36px] xl:h-[41px] 2xl:h-[47px] 3xl:h-[56px] w-[4%]"
                  alt="arrowright"
                />
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  Singapore Airlines
                </Text>
                <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[18%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    8:45 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[23%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[53%]"
                    alt="FlightIcon One"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    15H 10M, 2-stops
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[11%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    7:55 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 900
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_file.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[4%]"
                  alt="file"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  Japan Airlines
                </Text>
                <Column className="lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[15%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    8:20 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[19%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[63%]"
                    alt="FlightIcon Two"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    17H 30M, 1-stop
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[9%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    9:50 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 859
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_signal_24X34.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[4%]"
                  alt="signal One"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  ANA
                </Text>
                <Column className="lg:ml-[101px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] w-[9%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    6:35 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center 2xl:ml-[109px] 3xl:ml-[130px] lg:ml-[84px] xl:ml-[96px] w-[14%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[88%]"
                    alt="FlightIcon Three"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    19H 15M, 1-stop
                  </Text>
                </Column>
                <Column className="items-end 2xl:ml-[107px] 3xl:ml-[128px] lg:ml-[83px] xl:ml-[95px] w-[9%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    9:50 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 936
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_group376.png"
                  className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                  alt="Group376"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  American Airlines
                </Text>
                <Column className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[18%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    8:20 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[22%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[55%]"
                    alt="FlightIcon Four"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    17H 30M, 1-stop
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[11%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    9:50 AM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 939
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_signal.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[4%]"
                  alt="signal Two"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  Turkish Airlines
                </Text>
                <Column className="lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[15%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    11:35 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[21%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[59%]"
                    alt="FlightIcon Five"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    33H 10M, 2-stops
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[9%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    4:45 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 673
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_file.svg"
                  className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[4%]"
                  alt="file One"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  Japan Airlines
                </Text>
                <Column className="lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[15%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    10:25 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[19%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[64%]"
                    alt="FlightIcon Six"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    26H 45M, 1-stop
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] w-[9%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    9:10 AM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 859
                </Text>
              </Row>
              <Row className="bg-white_A700 border-bluegray_101 border-bw07 border-solid items-center lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius6 w-[100%]">
                <Img
                  src="images/img_group376.png"
                  className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] lg:w-[26px] xl:w-[30px] 2xl:w-[34px] 3xl:w-[40px]"
                  alt="Group376 One"
                />
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 tracking-ls1 w-[auto]">
                  American Airlines
                </Text>
                <Column className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[18%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    10:25 PM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[22%]">
                  <Img
                    src="images/img_flighticon.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[55%]"
                    alt="FlightIcon Seven"
                  />
                  <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    26H 45M, 1-stop
                  </Text>
                </Column>
                <Column className="items-end lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[11%]">
                  <Text className="font-medium lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 tracking-ls1 w-[auto]">
                    9:10 AM
                  </Text>
                  <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_701 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                </Column>
                <Line className="bg-gray_200 2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[1px]" />
                <Text className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-amber_700 tracking-ls1 w-[auto]">
                  S$ 859
                </Text>
              </Row>
            </List>
            <Button
              className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center tracking-ls1 w-[24%]"
              size="xl"
              variant="FillBlue800"
            >
              Show more results
            </Button>
          </Column>
        </Row>
        <footer className="font-roboto lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
          <Column className="items-center w-[100%]">
            <Column
              className="bg-cover bg-gray_100 bg-repeat items-center justify-end lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] w-[100%]"
              style={{
                backgroundImage: "url('images/img_newsletterform.png')",
              }}
            >
              <Text className="font-bold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_801 tracking-ls1 uppercase w-[auto]">
                subscribe to our newsletter
              </Text>
              <Text className="font-bold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_801 w-[auto]">
                Get weekly updates
              </Text>
              <Column className="bg-white_A700 border border-gray_201 border-solid justify-end lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius12 shadow-bs w-[39%]">
                <Text className="font-normal ml-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_600 w-[auto]">
                  Fill in your details to join the party!
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-black_900_99 text-black_900_99 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[23px] 3xl:mt-[27px] lg:mt-[17px] ml-[2px] w-[99%] xl:mt-[20px]"
                  type="text"
                  name="Input"
                  placeholder="Your name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-black_900_99 text-black_900_99 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] ml-[2px] w-[99%] xl:mt-[8px]"
                  type="email"
                  name="Input One"
                  placeholder="Email address"
                ></Input>
                <Button
                  className="font-medium ml-[2px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[36%]"
                  size="lg"
                >
                  submit
                </Button>
              </Column>
            </Column>
            <Row className="bg-gradient1  lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] w-[100%]">
              <Column className="lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] mt-[1px] pb-[1px] pr-[1px] w-[46%]">
                <Img
                  src="images/img_combinedshape_white_A700.svg"
                  className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] w-[27%]"
                  alt="CombinedShape One"
                />
                <Text className="font-normal lg:leading-[21px] xl:leading-[24px] 2xl:leading-[27px] 3xl:leading-[32px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[90%]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </Text>
                <Img
                  src="images/img_socialicons.svg"
                  className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[20%]"
                  alt="SocialIcons"
                />
              </Column>
              <Line className="bg-white_A700_33 lg:h-[122px] xl:h-[139px] 2xl:h-[157px] 3xl:h-[188px] mb-[2px] w-[1px]" />
              <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[11%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  About Us
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  News
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  How we work
                </Text>
              </Column>
              <Column className="lg:h-[120px] xl:h-[137px] 2xl:h-[155px] 3xl:h-[185px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[119px] xl:w-[136px] 2xl:w-[154px] 3xl:w-[184px]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  Support
                </Text>
                <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Account
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Support Center
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  FAQ
                </Text>
                <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Accessibility
                </Text>
              </Column>
              <Column className="lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] mt-[2px] w-[9%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                  More
                </Text>
                <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Covid Advisory
                </Text>
                <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Airline Fees
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Tips
                </Text>
                <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Quarantine Rules
                </Text>
              </Column>
            </Row>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ResultsPagePage;
