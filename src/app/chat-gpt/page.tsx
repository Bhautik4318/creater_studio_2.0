"use client";

import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaLongArrowAltUp, FaShapes, FaShareAltSquare, FaAirbnb, FaRegGrinHearts, FaWordpress, FaAlignRight, FaAndroid, FaAngrycreative, FaAlgolia, FaAdn, FaAnkh, FaArchway, FaAudible, FaAmilia, FaAppleAlt, FaBacon, FaApper, FaBath, FaBandcamp } from 'react-icons/fa';
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
