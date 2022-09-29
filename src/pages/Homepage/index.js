import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  RadioGroup,
  Radio,
  Button,
  Line,
  List,
  Input,
} from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/resultspage");
  }
  function handleNavigate5() {
    navigate("/");
  }
  function handleNavigate6() {
    navigate("/");
  }
  function handleNavigate7() {
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
            <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[574px] xl:ml-[656px] 2xl:ml-[738px] 3xl:ml-[886px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_800 w-[auto]">
              Explore
            </Text>
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]"
              onClick={handleNavigate4}
            >
              Search
            </Text>
            <Text
              className="common-pointer cursor-pointer hover:font-normal font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] hover:text-blue_800 text-gray_800 w-[auto]"
              onClick={handleNavigate5}
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
              alt="profilepicture"
            />
          </Row>
        </header>
        <Stack className="lg:h-[498px] xl:h-[570px] 2xl:h-[641px] 3xl:h-[769px] w-[100%]">
          <div className="absolute bg-gradient2  bottom-[0] lg:h-[497px] xl:h-[569px] 2xl:h-[640px] 3xl:h-[768px] w-[100%]"></div>
          <Stack className="absolute lg:h-[497px] xl:h-[569px] 2xl:h-[640px] 3xl:h-[768px] top-[0] w-[100%]">
            <Img
              src="images/img_bannerbackgro.png"
              className="absolute lg:h-[498px] xl:h-[570px] 2xl:h-[641px] 3xl:h-[769px] w-[100%]"
              alt="BannerBackgro"
            />
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[3px] w-[81%]">
              <Text className="font-baloobhai font-normal not-italic lg:text-[47px] xl:text-[54px] 2xl:text-[61px] 3xl:text-[73px] text-white_A700 w-[auto]">
                Let’s explore & travel the world
              </Text>
              <Text className="font-normal font-roboto lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 w-[auto]">
                Find the best destinations and the most popular stays!
              </Text>
              <Column className="bg-white_A700 font-roboto items-center justify-end lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                <Row className="items-center justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] w-[99%]">
                  <Text className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 tracking-ls1 uppercase w-[auto]">
                    Search flights
                  </Text>
                  <RadioGroup
                    selectedValue="Return"
                    className="flex w-[19%]"
                    name="radiogrouplabel"
                  >
                    <Radio
                      value="Return"
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900_dd tracking-ls1"
                      inputClassName="h-[16.67px] mr-[5px] w-[16.67px]"
                      checked={true}
                      name="radiogrouplabel"
                      label="Return"
                    ></Radio>
                    <Radio
                      value="Oneway"
                      className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900_dd tracking-ls1"
                      inputClassName="h-[16.67px] mr-[5px] w-[16.67px]"
                      checked={true}
                      name="radiogrouplabel"
                      label="Oneway"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[100%]">
                  <Column className="border border-black_900_3a border-solid xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[27%]">
                    <Text className="bg-white_A700 font-normal ml-[4px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_99 tracking-ls1 w-[54px]">
                      Departure
                    </Text>
                    <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900_dd tracking-ls1 w-[auto]">
                      Singapore (SIN)
                    </Text>
                  </Column>
                  <Column className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[27%]">
                    <Column className="bg-white_A700 items-center ml-[4px] w-[12%]">
                      <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] w-[100%]"></div>
                      <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_99 tracking-ls1 w-[auto]">
                        Arrival
                      </Text>
                    </Column>
                    <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900_dd tracking-ls1 w-[auto]">
                      Los Angeles (LA)
                    </Text>
                  </Column>
                  <Column className="border border-black_900_3a border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius4 w-[27%]">
                    <Column className="bg-white_A700 items-center ml-[4px] w-[9%]">
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
                        className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[6%]"
                        alt="trash"
                      />
                    </Row>
                  </Column>
                  <Button
                    className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[15%]"
                    size="lg"
                  >
                    Search flights
                  </Button>
                </Row>
              </Column>
            </Column>
          </Stack>
        </Stack>
        <Column className="lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] lg:px-[62px] xl:px-[71px] 2xl:px-[80px] 3xl:px-[96px] w-[100%]">
          <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 tracking-ls1 uppercase w-[auto]">
            Upcoming Flight
          </Text>
        </Column>
        <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[89%]">
          <Column className="border border-gray_201 border-solid items-center mb-[1px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 w-[41%]">
            <Row className="items-center pt-[1px] w-[100%]">
              <Column className="mt-[1px] w-[36%]">
                <Text className="capitalize font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_801 tracking-ls1 w-[auto]">
                  SIN
                </Text>
                <Text className="capitalize font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Singapore
                </Text>
              </Column>
              <Column className="mb-[1px] pr-[2px] pt-[2px] w-[48%]">
                <Img
                  src="images/img_flighticons.svg"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] 2xl:mr-[108px] 3xl:mr-[129px] lg:mr-[84px] xl:mr-[96px] w-[52%]"
                  alt="Flighticons"
                />
                <Text className="capitalize font-bold lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                  15H 55M
                </Text>
              </Column>
              <Column className="items-end mt-[1px] w-[16%]">
                <Text className="capitalize font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_801 tracking-ls1 w-[auto]">
                  LAX
                </Text>
                <Text className="capitalize font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Los Angeles
                </Text>
              </Column>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
            <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Text className="capitalize font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                Departs on: 1 May, 08:00 AM
              </Text>
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 tracking-ls1 w-[auto]">
                4 days to go
              </Text>
            </Row>
          </Column>
          <Line className="bg-gray_201 lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[1px]" />
          <Column className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mt-[1px] w-[54%]">
            <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_101 tracking-ls1 uppercase w-[auto]">
              Prepare for your trip
            </Text>
            <Row className="items-center justify-evenly lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pb-[1px] w-[100%]">
              <Column className="items-center w-[17%]">
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillPink300"
                >
                  <Img
                    src="images/img_car.svg"
                    className="flex items-center justify-center"
                    alt="car"
                  />
                </Button>
                <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Hotel
                </Text>
              </Column>
              <Column className="items-center mb-[1px] w-[20%]">
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillDeeporange300"
                >
                  <Img
                    src="images/img_ticket.svg"
                    className="flex items-center justify-center lg:h-[25px] xl:h-[28px] 2xl:h-[32px] 3xl:h-[38px]"
                    alt="ticket"
                  />
                </Button>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Attractions
                </Text>
              </Column>
              <Column className="items-center w-[17%]">
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillGreenA400"
                >
                  <Img
                    src="images/img_map.svg"
                    className="flex items-center justify-center"
                    alt="map"
                  />
                </Button>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Eats
                </Text>
              </Column>
              <Column className="mb-[1px] w-[18%]">
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center ml-[2px] lg:w-[50px] xl:w-[57px] 2xl:w-[65px] 3xl:w-[78px]"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillAmberA400"
                >
                  <Img
                    src="images/img_car_48X48.svg"
                    className="flex items-center justify-center"
                    alt="car One"
                  />
                </Button>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Commute
                </Text>
              </Column>
              <Column className="items-center mb-[1px] w-[18%]">
                <Stack className="bg-blue_401 lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] lg:px-[14px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] rounded-radius16 w-[56%]">
                  <Img
                    src="images/img_car_19X21.svg"
                    className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[40%]"
                    alt="car Two"
                  />
                </Stack>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Taxi
                </Text>
              </Column>
              <Column className="items-center mb-[1px] w-[9%]">
                <Button
                  className="flex lg:h-[51px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder16"
                  size="lgIcn"
                  variant="icbFillLightgreenA700"
                >
                  <Img
                    src="images/img_vector.svg"
                    className="flex items-center justify-center"
                    alt="Movie"
                  />
                </Button>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Movies
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row className="items-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] pt-[1px] w-[89%]">
          <Column className="w-[82%]">
            <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_801 tracking-ls1 uppercase w-[auto]">
              Plan your next trip
            </Text>
            <Text className="capitalize font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-bluegray_900 tracking-ls1 w-[auto]">
              Most Popular Destinations
            </Text>
          </Column>
          <Row className="bg-white_A700 items-center justify-end p-[1px] rounded-radius12 w-[18%]">
            <Text className="font-medium mb-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_801 tracking-ls1 w-[auto]">
              View all destinations
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[2px] w-[7%]"
              alt="arrowright"
            />
          </Row>
        </Row>
        <List
          className="lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[87%]"
          orientation="horizontal"
        >
          <Row
            className="bg-cover bg-repeat justify-between lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius10 w-[100%]"
            style={{ backgroundImage: "url('images/img_unsplashnnzkzn.png')" }}
          >
            <Text className="font-bold ml-[3px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 tracking-ls1 w-[auto]">
              Paris
            </Text>
            <Column className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] mr-[3px] mt-[1px] w-[31%]">
              <Text className="font-normal font-roboto not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 uppercase w-[auto]">
                from
              </Text>
              <Text className="font-baloobhai font-normal mt-[1px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                $699
              </Text>
            </Column>
          </Row>
          <Row
            className="bg-cover bg-repeat justify-center lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius10 w-[100%]"
            style={{ backgroundImage: "url('images/img_unsplashyc8qqp.png')" }}
          >
            <Text className="font-bold ml-[3px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 tracking-ls1 w-[auto]">
              Greece
            </Text>
            <Column className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] mr-[3px] mt-[1px] w-[36%]">
              <Text className="font-normal font-roboto not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 uppercase w-[auto]">
                from
              </Text>
              <Text className="font-baloobhai font-normal mr-[1px] mt-[1px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                $1079
              </Text>
            </Column>
          </Row>
          <Row
            className="bg-cover bg-repeat justify-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]"
            style={{ backgroundImage: "url('images/img_unsplashltnpej.png')" }}
          >
            <Text className="font-bold ml-[2px] mt-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 tracking-ls1 w-[auto]">
              Norway
            </Text>
            <Column className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] mr-[2px] w-[30%]">
              <Text className="font-normal font-roboto not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 uppercase w-[auto]">
                from
              </Text>
              <Text className="font-baloobhai font-normal mt-[1px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                $895
              </Text>
            </Column>
          </Row>
          <Row
            className="bg-cover bg-repeat justify-between 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]"
            style={{ backgroundImage: "url('images/img_unsplashm0oiyn.png')" }}
          >
            <Text className="font-bold ml-[2px] mt-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 tracking-ls1 w-[auto]">
              Tuscany
            </Text>
            <Column className="items-end 2xl:mb-[108px] 3xl:mb-[129px] lg:mb-[84px] xl:mb-[96px] mr-[2px] w-[36%]">
              <Text className="font-normal font-roboto not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 uppercase w-[auto]">
                from
              </Text>
              <Text className="font-baloobhai font-normal mt-[1px] not-italic lg:text-[29px] xl:text-[33px] 2xl:text-[38px] 3xl:text-[45px] text-white_A700 w-[auto]">
                $1245
              </Text>
            </Column>
          </Row>
        </List>
        <Row className="justify-between 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[89%]">
          <Text className="capitalize font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-bluegray_900 tracking-ls1 w-[auto]">
            Recommended Holidays
          </Text>
          <Row className="bg-white_A700 items-center justify-end mt-[1px] p-[2px] rounded-radius12 w-[16%]">
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_801 tracking-ls1 w-[auto]">
              View all holidays
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[1px] w-[8%]"
              alt="arrowright One"
            />
          </Row>
        </Row>
        <List
          className="lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-4 min-h-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:px-[12px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[89%]"
          orientation="horizontal"
        >
          <Column className="items-center w-[100%]">
            <Img
              src="images/img_reccard1.png"
              className="lg:h-[189px] xl:h-[216px] 2xl:h-[243px] 3xl:h-[291px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
              alt="unsplash5MV818"
            />
            <Row className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="font-roboto my-[4px] w-[72%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_800 tracking-ls1 w-[auto]">
                  Bali
                </Text>
                <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                  4D3N
                </Text>
              </Column>
              <Text className="font-baloobhai font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-blue_800 w-[auto]">
                $899
              </Text>
            </Row>
          </Column>
          <Column className="items-center w-[100%]">
            <Img
              src="images/img_reccard2.png"
              className="lg:h-[189px] xl:h-[216px] 2xl:h-[243px] 3xl:h-[291px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
              alt="SwitzerlandImag"
            />
            <Row className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="font-roboto my-[4px] w-[71%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_800 tracking-ls1 w-[auto]">
                  Swiss
                </Text>
                <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                  6D5N
                </Text>
              </Column>
              <Text className="font-baloobhai font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-blue_800 w-[auto]">
                $900
              </Text>
            </Row>
          </Column>
          <Column className="items-center w-[100%]">
            <Img
              src="images/img_reccard3.png"
              className="lg:h-[189px] xl:h-[216px] 2xl:h-[243px] 3xl:h-[291px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
              alt="BoracayImage"
            />
            <Row className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="font-roboto lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[72%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_800 tracking-ls1 w-[auto]">
                  Boracay
                </Text>
                <Text className="font-normal mt-[4px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                  5D4N
                </Text>
              </Column>
              <Text className="font-baloobhai font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-blue_800 w-[auto]">
                $699
              </Text>
            </Row>
          </Column>
          <Column className="items-center w-[100%]">
            <Img
              src="images/img_reccard4.png"
              className="lg:h-[189px] xl:h-[216px] 2xl:h-[243px] 3xl:h-[291px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
              alt="PalawanImage"
            />
            <Row className="bg-white_A700 border border-gray_201 border-solid items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="font-roboto my-[4px] w-[73%]">
                <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_800 tracking-ls1 w-[auto]">
                  Palawan
                </Text>
                <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500 tracking-ls1 w-[auto]">
                  4D3N
                </Text>
              </Column>
              <Text className="font-baloobhai font-normal not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-blue_800 w-[auto]">
                $789
              </Text>
            </Row>
          </Column>
        </List>
        <Row className="justify-between 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[89%]">
          <Text className="capitalize font-bold lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-bluegray_900 tracking-ls1 w-[auto]">
            Popular Stays
          </Text>
          <Row
            className="common-pointer bg-white_A700 items-center justify-end mt-[1px] p-[2px] rounded-radius12 w-[14%]"
            onClick={handleNavigate7}
          >
            <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_801 tracking-ls1 w-[auto]">
              View all stays
            </Text>
            <Img
              src="images/img_arrowright.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[1px] w-[9%]"
              alt="arrowright Two"
            />
          </Row>
        </Row>
        <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[87%]">
          <Column className="bg-white_A700 border border-gray_201 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[24%]">
            <Img
              src="images/img_unsplashhhrfsd.png"
              className="lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] mt-[2px] rounded-radius10 w-[100%]"
              alt="MatterhornSuit"
            />
            <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
              <Column className="w-[91%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Entire bungalow
                </Text>
                <Text className="capitalize font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                  Matterhorn Suites
                </Text>
                <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 tracking-ls1 w-[auto]">
                  $575/night
                </Text>
              </Column>
              <Img
                src="images/img_play.svg"
                className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] mt-[1px] lg:w-[17px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                alt="play"
              />
            </Row>
            <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[54%]">
              <Img
                src="images/img_star.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[11%]"
                alt="star"
              />
              <Text className="font-medium ml-[3px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                4.9
              </Text>
              <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                (60 reviews)
              </Text>
            </Row>
            <Button
              className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
              variant="OutlineBluegray102"
            >
              More details
            </Button>
          </Column>
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[75%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 border border-gray_201 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_unsplashtsn8bp.png"
                className="lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] mt-[2px] rounded-radius10 w-[100%]"
                alt="DiscoveryShore"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                2-Story beachfront suite
              </Text>
              <Text className="capitalize font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                Discovery Shores
              </Text>
              <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 tracking-ls1 w-[auto]">
                $360/night
              </Text>
              <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[58%]">
                <Img
                  src="images/img_star.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[10%]"
                  alt="star One"
                />
                <Text className="font-medium ml-[3px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.8
                </Text>
                <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                  (116 reviews)
                </Text>
              </Row>
              <Button
                className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
                variant="OutlineBluegray102"
              >
                More details
              </Button>
            </Column>
            <Column className="bg-white_A700 border border-gray_201 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_unsplashrlwe8f.png"
                className="lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] mt-[2px] rounded-radius10 w-[100%]"
                alt="ArcticHutImag"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                Single deluxe hut
              </Text>
              <Text className="capitalize font-bold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                Arctic Hut{" "}
              </Text>
              <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 tracking-ls1 w-[auto]">
                $420/night
              </Text>
              <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[54%]">
                <Img
                  src="images/img_star.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[11%]"
                  alt="star Two"
                />
                <Text className="font-medium ml-[3px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.7
                </Text>
                <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                  (78 reviews)
                </Text>
              </Row>
              <Button
                className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
                variant="OutlineBluegray102"
              >
                More details
              </Button>
            </Column>
            <Column className="bg-white_A700 border border-gray_201 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_unsplashyqrybv.png"
                className="lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] mt-[2px] rounded-radius10 w-[100%]"
                alt="LakeLouiseIma"
              />
              <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                <Column className="w-[91%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Deluxe King Room
                  </Text>
                  <Text className="capitalize font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_900 tracking-ls1 w-[auto]">
                    Lake Louise Inn
                  </Text>
                  <Text className="font-normal lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 tracking-ls1 w-[auto]">
                    $244/night
                  </Text>
                </Column>
                <Img
                  src="images/img_play.svg"
                  className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] mt-[1px] lg:w-[17px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                  alt="play One"
                />
              </Row>
              <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[54%]">
                <Img
                  src="images/img_star.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[11%]"
                  alt="star Three"
                />
                <Text className="font-medium ml-[3px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.6
                </Text>
                <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 tracking-ls1 w-[auto]">
                  (63 reviews)
                </Text>
              </Row>
              <Button
                className="font-medium mb-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center tracking-ls1 uppercase w-[100%]"
                variant="OutlineBluegray103"
              >
                More details
              </Button>
            </Column>
          </List>
        </Row>
        <footer className="lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[100%]">
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
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
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

export default HomepagePage;
