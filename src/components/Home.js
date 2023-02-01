import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { magicEthereum, magicMatic, ethWeb3, maticWeb3 } from "../magic";
import Loading from "./Loading";
import ContractCall from "./ContractCall";
import SendTransaction from './SendTransaction';
import Info from "./Info";
import { abi } from '../contract/abi.js';

